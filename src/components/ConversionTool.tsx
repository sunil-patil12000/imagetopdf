import React, { useState, useRef, useCallback } from 'react';
import { Upload, Image, Settings, Download, X, ArrowUp, ArrowDown } from 'lucide-react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image as PDFImage } from '@react-pdf/renderer';
import { Helmet } from 'react-helmet';

type FileWithPreview = {
  file: File;
  preview: string;
  id: string;
};

type PDFSettings = {
  quality: 'standard' | 'high' | 'maximum';
  pageSize: 'a4' | 'letter' | 'legal';
  addPageNumbers: boolean;
  orientation: 'portrait' | 'landscape';
};

interface ConversionToolProps {
  darkMode: boolean;
}

const ConversionTool: React.FC<ConversionToolProps> = ({ darkMode }) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [isConverted, setIsConverted] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<PDFSettings>({
    quality: 'high',
    pageSize: 'a4',
    addPageNumbers: false,
    orientation: 'portrait',
  });
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  }, []);

  const handleFiles = (fileList: FileList) => {
    const newFiles: FileWithPreview[] = [];
    
    Array.from(fileList).forEach(file => {
      // Check if file is an image
      if (file.type.match('image.*')) {
        const reader = new FileReader();
        
        reader.onload = (e) => {
          if (e.target && e.target.result) {
            newFiles.push({
              file,
              preview: e.target.result as string,
              id: Math.random().toString(36).substring(2, 11)
            });
            
            // Update state after all files are processed
            if (newFiles.length === fileList.length) {
              setFiles(prevFiles => [...prevFiles, ...newFiles]);
            }
          }
        };
        
        reader.readAsDataURL(file);
      }
    });
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const removeFile = (id: string) => {
    setFiles(prevFiles => prevFiles.filter(file => file.id !== id));
  };

  const moveFile = (id: string, direction: 'up' | 'down') => {
    const index = files.findIndex(file => file.id === id);
    if (
      (direction === 'up' && index === 0) || 
      (direction === 'down' && index === files.length - 1)
    ) {
      return;
    }

    const newFiles = [...files];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    
    [newFiles[index], newFiles[newIndex]] = [newFiles[newIndex], newFiles[index]];
    setFiles(newFiles);
  };

  const handleConvert = () => {
    if (files.length === 0) return;
    
    setIsConverting(true);
    
    // Simulate conversion process
    setTimeout(() => {
      setIsConverting(false);
      setIsConverted(true);
    }, 2000);
  };

  const MyDocument = ({ files }) => (
    <Document>
      <Page style={styles.body}>
        {files.map((file) => (
          <View key={file.id} style={styles.imageContainer} wrap={false}>
            <PDFImage 
              src={file.preview} 
              style={styles.image}
              cache={false}
            />
          </View>
        ))}
      </Page>
    </Document>
  );

  const styles = StyleSheet.create({
    body: {
      padding: 30
    },
    imageContainer: {
      marginBottom: 15,
      padding: 10,
      border: '1 solid #e0e0e0'
    },
    image: {
      width: '100%',
      height: 200,
      objectFit: 'contain',
      marginBottom: 10
    }
  });

  const PdfSettingsModal = ({ settings, onClose, onSave }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-md overflow-hidden transform transition-all duration-300 scale-95 opacity-0 animate-in fade-in-zoom-in">
        <div className="p-6 border-b border-gray-100 dark:border-gray-700">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            PDF Settings
          </h3>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Page Orientation
              </label>
              <select 
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400"
                value={settings.orientation}
                onChange={(e) => setSettings({...settings, orientation: e.target.value as any})}
              >
                <option value="portrait">Portrait</option>
                <option value="landscape">Landscape</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Image Quality
              </label>
              <select
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400"
                value={settings.quality}
                onChange={(e) => setSettings({...settings, quality: e.target.value as any})}
              >
                <option value="standard">Standard</option>
                <option value="high">High</option>
                <option value="maximum">Maximum</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Page Size
              </label>
              <select
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400"
                value={settings.pageSize}
                onChange={(e) => setSettings({...settings, pageSize: e.target.value as any})}
              >
                <option value="a4">A4</option>
                <option value="letter">Letter</option>
                <option value="legal">Legal</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onSave}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const [showPdfSettingsModal, setShowPdfSettingsModal] = useState(false);

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://yourdomain.com/image-to-pdf" />
        <title>Best Free Image to PDF Converter Online – No Watermark</title>
        <meta name="description" content="Convert images (JPG, PNG, BMP) to PDF online for free. No registration, no watermark, fast & secure conversion. Try it now!" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "Is the Image to PDF converter online free?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our tool is completely free with no watermark or hidden charges."
              }
            }]
          })}
        </script>
      </Helmet>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto transition-colors duration-200">
        {/* Upload Area */}
        {files.length === 0 ? (
          <div 
            className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
              isDragging 
                ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/20' 
                : 'border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500'
            }`}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
          >
            <Upload className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-300" />
            <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
              Drag and drop your images here
            </p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Supports JPG, PNG, BMP, GIF, TIFF, and WEBP
            </p>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
            >
              Choose Files
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileInputChange}
              className="hidden"
            />
            <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
              No registration required • 100% free • Files deleted after 1 hour
            </p>
          </div>
        ) : (
          <div className="p-6">
            {/* File List */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {files.length} {files.length === 1 ? 'Image' : 'Images'} Selected
                </h3>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Add More
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileInputChange}
                  className="hidden"
                />
              </div>
              
              <div className="space-y-3 max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
                {files.map((file, index) => (
                  <div 
                    key={file.id} 
                    className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors"
                  >
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded bg-gray-200 dark:bg-gray-600">
                      <img 
                        src={file.preview} 
                        alt={`Preview of ${file.file.name}`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="ml-4 flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {file.file.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {(file.file.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => moveFile(file.id, 'up')}
                        disabled={index === 0}
                        className={`p-1 rounded-full ${
                          index === 0 
                            ? 'text-gray-300 dark:text-gray-600' 
                            : 'text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                        } transition-colors`}
                      >
                        <ArrowUp className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => moveFile(file.id, 'down')}
                        disabled={index === files.length - 1}
                        className={`p-1 rounded-full ${
                          index === files.length - 1 
                            ? 'text-gray-300 dark:text-gray-600' 
                            : 'text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                        } transition-colors`}
                      >
                        <ArrowDown className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => removeFile(file.id)}
                        className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Settings Toggle */}
            <div className="mb-6">
              <button
                onClick={() => setShowPdfSettingsModal(true)}
                className="flex items-center text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                <Settings className="h-4 w-4 mr-1" />
                PDF Settings
              </button>
            </div>
            
            {/* Action Buttons */}
            <div className="flex justify-center">
              {files.length > 0 && (
                <PDFDownloadLink
                  document={<MyDocument files={files} />}
                  fileName="converted-images.pdf"
                  style={{ textDecoration: 'none' }}
                >
                  {({ loading }) => (
                    <button
                      className={`flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${
                        loading ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      disabled={loading}
                    >
                      <Download size={18} />
                      {loading ? 'Generating PDF...' : 'Download PDF'}
                    </button>
                  )}
                </PDFDownloadLink>
              )}
            </div>
          </div>
        )}
        {showPdfSettingsModal && (
          <PdfSettingsModal 
            settings={settings} 
            onClose={() => setShowPdfSettingsModal(false)} 
            onSave={() => setShowPdfSettingsModal(false)} 
          />
        )}
      </div>
    </>
  );
};

export default ConversionTool;
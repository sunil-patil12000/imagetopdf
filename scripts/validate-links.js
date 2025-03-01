import { existsSync } from 'fs';
import { execSync } from 'child_process';

const INTERNAL_LINKS = Array.from(
  new Set(
    execSync('rg -o \'href="/([^"]*)"\' index.html -r \'$1\'')
      .toString()
      .split('\n')
      .filter(Boolean)
  )
);

INTERNAL_LINKS.forEach(link => {
  if (!existsSync(`./public/${link}`) && !existsSync(`./src/pages/${link}`)) {
    console.error(`Missing route: /${link}`);
    process.exit(1);
  }
});

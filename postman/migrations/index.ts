#!/usr/bin/env node

import child_process from 'child_process';
import fs from 'fs';
import path from 'path';

const filenames = fs
  .readdirSync(__dirname)
  .filter((filename) => filename.endsWith('.ts') && filename !== 'index.ts');

filenames.forEach((filename) => {
  console.log(`Migrating:\t${filename}`);

  child_process.execSync(`npx ts-node ${path.resolve(__dirname, filename)}`, {
    stdio: 'inherit',
  });

  console.log(`Migrated:\t${filename}`);
});

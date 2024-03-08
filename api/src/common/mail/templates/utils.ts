import { readFileSync } from 'fs';
import { join } from 'path';

export const loadTemplate = (
  templateName: string,
  context?: { [key: string]: string },
): string => {
  const pathToTemplate = join(
    __dirname,
    `${templateName}`,
    `${templateName}.html`,
  );
  let template = readFileSync(pathToTemplate, 'utf8');

  if (context) {
    Object.entries(context).forEach(([key, value]) => {
      const regex = new RegExp(`{{${key}}}`, 'g');
      template = template.replace(regex, value);
    });
  }

  return template;
};

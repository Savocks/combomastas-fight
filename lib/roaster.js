import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const roasterDirectory = path.join(process.cwd(), 'content', 'roaster');

export function getAllRoaster() {
  const fileNames = fs.readdirSync(roasterDirectory);
  const allRoasterData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.dm$/, '');
    const fullPath = path.join(roasterDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResults = matter(fileContents);

    return {
      id,
      ...matterResults.data,
    };
  });

  return allRoasterData.sort(({ id: a }, { id: b }) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getRoasterData(name) {
  const fullPath = path.join(roasterDirectory, `${name}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  return {
    name,
    ...matterResult.data,
  };
}

export function getAllRoasterNames() {
  const fileNames = fs.readdirSync(roasterDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        name: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

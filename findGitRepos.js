const { cwd } = require('process');

const fs = require('fs')
const path  = require('path')

const isDirectory = source => fs.lstatSync(source).isDirectory()
const getDirectories = source => fs.readdirSync(source).filter(name => isDirectory(path.join(source, name)))

function findGitRepos(dir, baseDir) {
    dir = dir || cwd();
    baseDir = baseDir || cwd();
    
    const directories = getDirectories(dir);
    const hasGitDir = directories.find(name => name === '.git') != null;
    if (hasGitDir) {
        return [path.relative(baseDir, dir)];
    } else {
        return Array.prototype.concat.apply([], getDirectories(dir).map(name => findGitRepos(path.join(dir, name), baseDir)));
    }
}

module.exports = findGitRepos;
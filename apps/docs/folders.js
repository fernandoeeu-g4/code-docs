import fs from "fs";
import path from "path";
import { execSync } from "child_process";

function findDeepestFile(
  baseDir = ".",
  currentPath = "",
  depth = 0,
  result = { depth: 0, file: "" }
) {
  const fullPath = path.join(baseDir, currentPath);
  const entries = fs.readdirSync(fullPath, { withFileTypes: true });

  for (const entry of entries) {
    const relativePath = path.join(currentPath, entry.name);
    const fullEntryPath = path.join(baseDir, relativePath);

    if (entry.isDirectory()) {
      findDeepestFile(baseDir, relativePath, depth + 1, result);
    } else if (entry.isFile()) {
      const fileDepth = relativePath.split(path.sep).length;
      if (fileDepth > result.depth) {
        result.depth = fileDepth;
        result.file = relativePath;
      }
    }
  }

  return result;
}

function main() {
  const baseDir = process.cwd();
  const { depth, file } = findDeepestFile(baseDir);

  if (!file) {
    console.log("🛑 Nenhum arquivo encontrado.");
    return;
  }

  const absolutePath = path.resolve(baseDir, file);

  // Copia pro clipboard
  try {
    execSync(`echo "${file}" | pbcopy`);
  } catch (err) {
    console.error("⚠️ Erro ao copiar pro clipboard:", err.message);
  }

  console.log(`🔍 Profundidade máxima: ${depth}`);
  console.log(`📁 Caminho relativo: ${file}`);
  console.log(`📍 Caminho absoluto: ${absolutePath}`);
  console.log("📋 Copiado pro clipboard com sucesso!");
}

main();

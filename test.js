function htmlTreeToJson(node) {
  const result = [];

  // Percorre todos os filhos diretos da subárvore (ul > li)
  for (const child of node.children) {
    if (child.classList.contains('dttLeaf')) {
      // Se for folha, extrair apenas o link
      const link = child.querySelector('a');
      if (link) {
        result.push({
          name: link.textContent.trim(),
          href: link.getAttribute('href')
        });
      }
    } else if (child.classList.contains('dttBranch')) {
      // Se for nó com filhos
      const label = child.querySelector('.dttLabel a');
      const subtree = child.querySelector('.dttSubTree');

      const branch = {
        name: label ? label.textContent.trim() : '',
        href: label ? label.getAttribute('href') : '',
        children: []
      };

      if (subtree) {
        branch.children = htmlTreeToJson(subtree);
      }

      // Remove a chave `children` se estiver vazia
      if (branch.children.length === 0) {
        delete branch.children;
      }

      result.push(branch);
    }
  }

  return result;
}

// Pegar o elemento raiz da árvore
const treeRoot = document.getElementById('tree1');

// Converter para JSON
const jsonTree = htmlTreeToJson(treeRoot);

// Exibir no console como JSON formatado
console.log(JSON.stringify(jsonTree, null, 2));
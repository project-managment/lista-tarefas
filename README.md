# Como executar o projeto no react
Primeiro, clone o repositório para sua máquina:
```sh
git clone https://github.com/project-managment/lista-tarefas-app
```
Depois execute os seguintes comandos para instalar o node:

``` sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

nvm install node
node --version
npm --version
```

Depois execute dentro do repositório execute para instalar as dependências:
``` sh
npm install 
```
Por fim execute para iniciar:
``` sh
npm start
```

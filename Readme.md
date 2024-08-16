
# Usina do Corpo

Esté é o projeto de um aplicativo feito como teste técnico de um processo seletivo.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado os seguintes softwares:

- **Node.js** (versão 12 ou superior)
- **npm** (gerenciador de pacotes do Node.js)
- **Ionic CLI** (versão mais recente)

### Instalando o Ionic CLI

Se você ainda não instalou o Ionic CLI, pode fazer isso usando o npm:

```bash
npm install -g @ionic/cli
```

## Como rodar o projeto

Siga os passos abaixo para rodar o projeto em sua máquina local:

1. **Clone o repositório**:

   Clone este repositório para o seu ambiente local usando o seguinte comando:

   ```bash
   git clone https://github.com/PedroSarment/usi_academy.git
   ```

2. **Instale as dependências**:

   Navegue até a pasta do projeto e instale as dependências necessárias com o npm:

   ```bash
   cd usi_academy
   npm install
   ```

3. **Rodando o projeto localmente**:

   Após a instalação das dependências, você pode rodar o projeto em um servidor de desenvolvimento local usando o comando:

   ```bash
   ionic serve
   ```

   Este comando abrirá o aplicativo em seu navegador padrão. Qualquer mudança no código será automaticamente recarregada no navegador.

4. **Rodando em um dispositivo ou emulador**:

   Para rodar o aplicativo em um dispositivo físico ou emulador, certifique-se de ter o ambiente necessário configurado (Android Studio para Android, Xcode para iOS), e então use um dos seguintes comandos:

   - **Para Android**:

     ```bash
     ionic capacitor run android
     ```

   - **Para iOS**:

     ```bash
     ionic capacitor run ios
     ```

## Estrutura do Projeto

O projeto segue a estrutura padrão do Ionic com Angular. Os principais diretórios são:

- **src/app/**: Contém os módulos, componentes e serviços da aplicação.
- **src/assets/**: Armazena os arquivos de imagem, fontes, e outros recursos estáticos.
- **src/environments/**: Configurações específicas para diferentes ambientes (desenvolvimento e produção).

### Componentes Principais

- **HomePage**: Página inicial que lista os diferentes cartões de treinamento.
- **TrainingCardComponent**: Componente que exibe as informações de cada tipo de treinamento, incluindo título, subtítulo, link para novo treinamento, e imagem de fundo.

## Personalização

Para adicionar novos cartões de treinamento, edite o array `trainingSlides` no arquivo `home.page.ts` e adicione novas entradas seguindo o formato existente.

```typescript
trainingSlides: TrainingCardConfig[] = [
  {
    title: 'Novo Treinamento',
    subtitle: 'Descrição do novo treinamento',
    newTrainingLink: '/trainings/novo',
    imageUrl: 'assets/img/novo-treinamento.jpg'
  }
];
```
Feito com ❤️ por Pedro Sarmento

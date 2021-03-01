" basic setup
filetype plugin indent on
let mapleader=" "
let maplocalleader = " "
set clipboard=unnamedplus

"providers
let g:node_host_prog = '/Users/dieguit/.nvm/versions/node/v14.15.1/bin/neovim-node-host'
let g:python2_host_prog = '/usr/bin/python2'
let g:python3_host_prog = '/usr/bin/python3'

let g:echodoc#enable_at_startup = 1
let g:signify_sign_delete = '-'

let g:jsx_ext_required = 0 " Allow JSX in normal JS files
let g:user_emmet_settings = {
  \  'javascript' : {
    \    'extends' : 'jsx',
    \  },
  \  'typescript' : {
    \    'extends' : 'jsx',
    \  },
  \}

syntax enable
let g:netrw_liststyle = 3
let g:netrw_altv = 1
let g:netrw_winsize = 25
set tabstop=2
set mouse=a
set shiftwidth=2
set softtabstop=0
set expandtab smarttab
set number
set relativenumber
set list
set listchars=tab:»\ ,extends:›,precedes:‹,nbsp:·,trail:·,space:·
set cursorline
set wildmenu
set wildignore+=*/tmp/*,*.so,*.swp,*.zip,*/min/*,*/vendor/*,*/node_modules/*,*/bower_components/*
set lazyredraw
set showmatch
set incsearch
set hlsearch
set ignorecase
set smartcase
set diffopt+=vertical


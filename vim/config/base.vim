" basic setup
filetype plugin indent on
let mapleader=" "
let maplocalleader = " "
set clipboard=unnamedplus

let g:node_host_prog = '/Users/dieguit/.nvm/versions/node/v10.16.0/bin/neovim-node-host'

syntax enable
let g:netrw_liststyle = 3
let g:netrw_altv = 1
let g:netrw_winsize = 25
set tabstop=2
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

let g:echodoc#enable_at_startup = 1
let g:signify_sign_delete = '-'

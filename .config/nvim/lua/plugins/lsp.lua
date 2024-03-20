return {
  "neovim/nvim-lspconfig",
  opts = {
    --inlay_hints = { enabled = true },
    servers = {
      tsserver = {
        keys = {
          {
            "<leader>ci",
            function()
              vim.lsp.buf.code_action({
                apply = true,
                context = {
                  only = { "source.addMissingImports.ts" },
                  diagnostics = {},
                },
              })
            end,
            desc = "Add missing imports",
          },
          {
            "<leader>cfa",
            function()
              vim.lsp.buf.code_action({
                apply = true,
                context = {
                  only = { "source.fixAll.ts" },
                  diagnostics = {},
                },
              })
            end,
            desc = "Fix all",
          }
        },
        settings = {
          typescript = {
            inlayHints = {
              includeInlayParameterNameHints = "literals",
              includeInlayParameterNameHintsWhenArgumentMatchesName = false,
              includeInlayFunctionParameterTypeHints = false,
              includeInlayVariableTypeHints = false,
              includeInlayVariableTypeHintsWhenTypeMatchesName = false,
              includeInlayPropertyDeclarationTypeHints = true,
              includeInlayFunctionLikeReturnTypeHints = false,
              includeInlayEnumMemberValueHints = true,
            },
          },
          javascript = {
            inlayHints = {
              includeInlayParameterNameHints = "literals",
              includeInlayParameterNameHintsWhenArgumentMatchesName = false,
              includeInlayFunctionParameterTypeHints = true,
              includeInlayVariableTypeHints = true,
              includeInlayVariableTypeHintsWhenTypeMatchesName = false,
              includeInlayPropertyDeclarationTypeHints = true,
              includeInlayFunctionLikeReturnTypeHints = true,
              includeInlayEnumMemberValueHints = true,
            },
          },
        },
      },
    },
  },
}

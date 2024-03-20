return {
  {
    "CopilotC-Nvim/CopilotChat.nvim",
    branch = "canary",
    dependencies = {
      { "zbirenbaum/copilot.lua" },        -- or github/copilot.vim
      { "nvim-lua/plenary.nvim" },         -- for curl, log wrapper
      { "nvim-telescope/telescope.nvim" }, -- for telescope help actions (optional)
    },
    keys = {
      {
        "<leader>ccq",
        function()
          local input = vim.fn.input("Quick Chat: ")
          if input ~= "" then
            require("CopilotChat").ask(input, { selection = require("CopilotChat.select").buffer })
          end
        end,
        desc = "CopilotChat - Quick chat",
      },
      { "<leader>cce", "<cmd>CopilotChatExplain<cr>", desc = "CopilotChat - Explain code" },
      { "<leader>ccT", "<cmd>CopilotChatTests<cr>",   desc = "CopilotChat - Generate tests" },
      {
        "<leader>cct",
        "<cmd>CopilotChatToggle<cr>",
        desc = "CopilotChat - Toggle", -- Toggle vertical split
      },
      {
        "<leader>ccf",
        "<cmd>CopilotChatFixDiagnostic<cr>", -- Get a fix for the diagnostic message under the cursor.
        desc = "CopilotChat - Fix diagnostic",
      },
      {
        "<leader>ccr",
        "<cmd>CopilotChatReset<cr>", -- Reset chat history and clear buffer.
        desc = "CopilotChat - Reset chat history and clear buffer",
      }
    },
    opts = {
      --debug = true, -- Enable debugging
      -- See Configuration section for rest
      -- window = {
      --   layout = 'float',
      --   relative = 'cursor',
      --   width = 0.7,
      --   height = 0.7,
      --   row = 1
      -- }
    },
    -- See Commands section for default commands if you want to lazy load on them
  },
}

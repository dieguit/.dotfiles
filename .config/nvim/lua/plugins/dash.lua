return {
  {
    "nvimdev/dashboard-nvim",
    opts = function(_, opts)
      opts.config.header = {}
      opts.config.week_header = {
        enable = true,
      }
    end,
  },
}

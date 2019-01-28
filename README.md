Dieguit's dotfiles
==================

Requirements
------------

Get RCM

	$ brew tap thoughtbot/formulae
	$ brew install rcm

Check more information about rcm here:
https://github.com/thoughtbot/rcm


Install
-------

After thoughtbot's dotfiles installation, clone onto your home directory:

	$ cd ~
	$ git clone git@github.com:dieguit/.dotfiles.git

Install the dotfiles using [rcm](https://github.com/thoughtbot/rcm):

	$ env RCRC=$HOME/.dotfiles/rcrc rcup

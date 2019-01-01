---
layout: default
---
# Open Source Activity Formatter
[![Discord](https://img.shields.io/discord/289994252241338369.svg?style=for-the-badge)](https://discord.gg/QaMwnGd)
[![GitHub issues](https://img.shields.io/github/issues/jacebenson/osaf.svg?style=for-the-badge)](https://github.com/jacebenson/osaf/issues)
[![GitHub forks](https://img.shields.io/github/forks/jacebenson/osaf.svg?style=for-the-badge)](https://github.com/jacebenson/osaf/network)
[![GitHub stars](https://img.shields.io/github/stars/jacebenson/osaf.svg?style=for-the-badge)](https://github.com/jacebenson/osaf/stargazers) 
[![GitHub pull requests](https://img.shields.io/github/issues-pr/jacebenson/osaf.svg?style=for-the-badge)](https://github.com/jacebenson/osaf/pulls/)

Open Source Activity Formatter is a global ui macro that renders updates, 
comments, work notes, and related records for a single record on the UI 16
of Servicenow.  The Out of Box version has some limitation and they will not
open this up.  This is my attempt to solve my problems with that formatter.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
  * [Features](#features)
* [Contributing](#contributing)
  * [Setting up your pdi](#setting-up-a-pdi-personal-developer-instance)
  * [Setting up the repo](#setting-up-the-repo)
  * [Actually Contributing](#actually-contributing)

## Installation

If you just want to try it out, follow these steps;

1. Download the XML from the `/dist/` folder
2. Install the update set
   ** THIS ONLY adds the UI MACRO, it does not change your forms **

## Usage

After it's installed you can add the formatter "Open Source Activity Formatter"
to your forms.

### Features

Below is the desired features this will have at the end of version 1.


## Contributing

Pull requests are welcome. For major changes, please open an issue first to 
discuss what you would like to change.

However there are a lot of issues for everything I could find in servicenow.
If you know that application feel free to fill out the issue and comment on it.

### Setting up the repo

1.  [Fork this project](https://github.com/jacebenson/osaf/fork)
2.  Follow the [installation](#installation) steps, but use your repository.

### Actually Contributing

1.  [Fork it](https://github.com/jacebenson/osaf/fork)
1.  Make your changes to the files in `/src`
1.  Export your updates to a single update set and version it in `/dist`
1.  Create a new Pull Request

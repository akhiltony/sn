# OSAF

> Open Source Activity Formatter

## Installing / Getting started

### Update Set

If you just want to try it out, follow these steps;

1. Download the XML from the `/dist/` folder
2. Install the update set
   ** THIS ONLY adds the UI MACRO, it does not change your forms **

### Docs 
To get these docs up and running you need [hugo](https://github.com/gohugoio/hugo/releases).

```shell
git clone https://github.com/jacebenson/atf
cd atf
git checkout b docs
path/to/hugo server --watch #should bind to localhost:1313
```

The code above clones this repo, goes into the new directory
and then expects you to run `hugo server --watch`, which 
generates and serves the site locally.


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

## Licensing

"The code in this project is licensed under MIT license."

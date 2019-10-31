# The Building Blocks of Building Blocks

## How this works

For this exercise we're going to build an Author profile block. I chose this block because it has all sorts of little peices to it that help us cover a lot of material in a short amount of time.

I've separated each of the exercise steps in their own branches, with commits relative to tasks within each step. If you fall behind and want to quickly catch up, simply switch branches. 

The `final` branch consists of the finished block.

## Local Development / Getting Started
**A.** First, you need a WordPress Environment to run this plugin and start block development. The quickest way to get up and running is to use the provided docker setup. Install [docker-ce](https://store.docker.com/search?type=edition&offering=community) and [docker-compose](https://docs.docker.com/compose/install/) (if necessary) by following the most recent instructions on the Docker site.

**B.** Start Docker on your machine.

**C.** In the folder of your preference, clone this project and enter the working directory:

```
git clone git@github.com:richtabor/building-blocks.git
cd building-blocks
```

**D.** To start this local WordPress instance, run within the project: `docker-compose up -d`. Once started, WordPress should now be available at `http://localhost:9999`. **Note:** When we're done, run `docker-compose stop` to stop this local setup.

**E.** Finish setting up WordPress, log in, then activate this "Building Blocks" plugin. 


**F.** Install the node packages needed for development by running `npm install`

**G.** To build the production version of the plugin, run `npm run build`

## Additional Resources:
[Gutenberg developer documentation](https://wordpress.org/gutenberg/handbook/)
[More Gutenberg examples](https://github.com/WordPress/gutenberg-examples) - which this example is based off of

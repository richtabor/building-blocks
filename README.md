# The Building Blocks of Building Blocks


### Step 1: Exercise is downloaded from GitHub and running with Docker

First, you need a WordPress Environment to run the plugin on. The quickest way to get up and running is to use the provided docker setup. Install [docker-ce](https://store.docker.com/search?type=edition&offering=community) and [docker-compose](https://docs.docker.com/compose/install/) by following the most recent instructions on the docker site.

In the folder of your preference, clone this project and enter the working directory:

```
git clone https://github.com/richtabor/building-blocks.git
cd building-blocks
```

To bring up this local WordPress instance run:

```
docker-compose up -d
```

WordPress should now be available at `http://localhost:9999`

To stop this local WordPress instance *when we're done*, run : `docker-compose stop`

To install the node packages, run `npm install`

To build the production version of the plugin `npm run build`

## Additional Resources:
[Gutenberg developer documentation](https://wordpress.org/gutenberg/handbook/)

# Landscape Modelling Tool

The prototype version can be accessed at https://landscapes.wearepal.ai/

## Deployment

### Requirements

You will need a server with:

* [Docker](https://www.docker.com), running in [swarm mode](https://docs.docker.com/engine/swarm/)
* At least 2GB of RAM
* A domain name that resolves to the server's IPv4 and/or IPv6 address
* TCP ports 80 and 443 open

### Instructions

* Clone this git repository onto the server, and `cd` into it
* Run `bin/deploy`
  * The first time you deploy the app, you will be prompted for configuration details
* After a minute or two, the app should come online
* Visit the web app at its configured address, and create a user account from the menu in the top-right of the page
* To shut down the app, run `docker stack rm landscapes`

### Customisation points

* The app uses the [Caddy](https://caddyserver.com) web server: a [`Caddyfile`](https://caddyserver.com/docs/caddyfile) is automatically generated by the deploy script and stored in a docker config named `landscapes_caddyfile`
  * To reconfigure your domain, shut down the app, run `docker config rm landscapes_caddyfile`, and then run the deploy script again
  * Alternatively, you can provide your own `Caddyfile` using `docker config create landscapes_caddyfile /path/to/your/Caddyfile` (see `Caddyfile` for a template)

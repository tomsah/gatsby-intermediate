//gatsby-node => give us access to gatsby lifecycle method during the build
// https://www.gatsbyjs.org/docs/api-files-gatsby-node/

const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp') // create folder recursively
const withDefaults = require('./utils/default-options')

exports.onPreBootstrap = ({store}, options) => {
  const {program} = store.getState()
  // get options with default
  const {contentPath} = withDefaults(options)

  //content path
  const dir = path.join(program.directory, contentPath)

  //if directory does not exist create it
  if(!fs.existsSync(dir)){
    //create dir here
    mkdirp.sync(dir)
  }
}

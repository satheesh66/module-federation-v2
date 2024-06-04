const runtimePlugin = () => ({
  name: "mf-runtime-plugin",
  handlePreloadModule: (args) => {
    console.log("handlePreloadModule", args);
    if (window[args.name]) return args;
    // args.remoteSnapshot.publicPath = "//127.0.0.1:3001/aa/";

    return args;
  },
});

export default runtimePlugin;

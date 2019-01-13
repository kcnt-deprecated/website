module.exports = ({ isDev, isProd, env, pkg }) => {
  return {
    disabled: isDev,
    public_key: 'ae4134e4a62b4ccd8bc0b7b7aab7e7c7',
    project_id: '1338780',
    config: {
      // Additional config
      environment: env,
      release: isProd ? `portfolio@${pkg.version}` : undefined,
      debug: isDev
    }
  }
}

const env = process.env.STAGING_ENV ? 'staging' : process.env.NODE_ENV || 'development';

const envConfigs = {
  development: {
    CONTENTFUL_SPACE_ID: 'bab88e5a75dn',
    CONTENTFUL_ACCESS_TOKEN_CDN: 'TAxXRMip8Pp7mXV6RF5h0ZBz_8J9VVC_4WOD6yJTHH0',
    CONTENTFUL_ACCESS_TOKEN_API: 'CFPAT-vyZtJ1Fg8Mzp0eH8Aqht3526YXHmudIvIk1YdPFrtZU'
  },
}[env];

module.exports = {
  reactStrictMode: true,
  env: envConfigs
}

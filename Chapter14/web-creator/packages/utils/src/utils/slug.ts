import slugFn from 'slug'

function slug(str = '') {
  return slugFn(str, { lower: true })
}

export default slug

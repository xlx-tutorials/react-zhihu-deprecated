// 遍历Object 深拷贝

function deepClone(object) {
  let res = Array.isArray(object) ? [] : {}

  for (let key in object) {
    if (Array.isArray(object[key])) {
      res[key] = [...object[key]].map(item => deepClone(item))
    }

    if (typeof object[key] === 'object') {
      res[key] = deepClone(object[key])
    } else {
      res[key] = object[key]
    }
  }

  return res
}

// const user = { name: 'Yoki' }
// const cloneUser = deepClone(user)
// user.name = 'Bob'
// console.log(cloneUser) // Yoki

const collection = [{ name: 'Yoki', type: { gender: 'male' } }]
const cloneCollection = deepClone(collection)
collection[0].type.gender = 'Femail'
console.log(cloneCollection) // [{ name: 'Yoki', type: { gender: 'male' } }]

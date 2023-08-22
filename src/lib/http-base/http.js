function CreateHttpHeader(name, value)
{
  let m = new Headers
  m.append(name, value)
  return m
}

function BulkAppendHeaders(headers, nameValueMap)
{
  let name = Object.keys(nameValueMap)

  for(let i = 0; i < name.length; i++)
  {
    headers.append(name[i], nameValueMap.get(name[i]))
  }
}

//TODO: Use https://axios-http.com instead

// console.log("Welcome to How To Write Services Using JavaScript")

// const http = {
//   cb: [],
//   intercept(cb) {
//     this.cb.push(cb);
//   },
//   async get(url, options = {}) {
//     return this.request(url, null, options)
//   },
//   async post(url, body = {}, options = {}) {
//     return this.request(url, body, { ...options, method: "POST" })
//   },
//   async put(url, body = {}, options = {}) {
//     // TODO
//   },
//   async delete(url, body = {}, options = {}) {
//     // TODO
//   },
//   async request(url, body = {}, options = {}) {
//     options.headers = {
//       'Content-Type': "application/json",
//       ...options.headers,
//     };
//     // Iterate all interceptors to modify the options
//     if (this.cb.length) {
//       for (let fn of this.cb) {
//         options = fn(options, url);
//       }
//     }
//     const res = await fetch(url, {
//       body: body ? JSON.stringify(body) : undefined,
//       ...options,
//     });
//     return res.json()
//   }
// }
// const authInterceptor = (options, url) => {
//   if (/users/.test(url) && options.method === "POST")
//     options.headers.Authorization = 'Bearer sometoken';
//   return options
// }
// http.intercept(authInterceptor)

// const apiHost = `http://localhost:3000`
// const services = {
//   getUsers() {
//     return http.get(`${apiHost}/users`)
//   },
//   createUser(user) {
//     return http.post(`${apiHost}/users`, user)
//   },
//   updateUser({ id, ...user }) {
//     return http.put(`${apiHost}/users/${id}`, user)
//   }
// }

// const id = Date.now();
// services.getUsers().then(console.log)
// services.createUser({
//   "id": id,
//   "name": "deepak2",
//   "age": 32,
//   "address": "not found2"
// }).then(console.log)
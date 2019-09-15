import * as Octokit from '@octokit/rest'

let username = 'jaredhughes'
debugger
const octokit = new Octokit()

const result = octokit.users.getByUsername({ username })

result.then(({ data }: Octokit.Response<Octokit.UsersGetByUsernameResponse>) => {
  debugger
  return data
})

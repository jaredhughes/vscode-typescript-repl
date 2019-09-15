import * as Octokit from '@octokit/rest'

let username = 'jaredhughes'

const octokit = new Octokit()

const result = octokit.users.getByUsername({ username })

result.then(({ data }: Octokit.Response<Octokit.UsersGetByUsernameResponse>) => {
  console.log(data.name, data.company)
  return data
})

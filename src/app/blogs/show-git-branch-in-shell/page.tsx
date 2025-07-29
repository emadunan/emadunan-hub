import CodeBlock from '@/components/blogs/CodeBlock'
import MainContainer from '@/components/layout/MainContainer'
import BlogContainer from '@/components/ui/BlogContainer'
import PageContainer from '@/components/ui/PageContainer'
import React from 'react'

const bashrcDefault = `
if [ "$color_prompt" = yes ]; then
  PS1='\\\${debian_chroot:+(\$debian_chroot)}\\[\\033[01;32m\\]\\u@\\h\\[\\033[00m\\]:\\[\\033[01;34m\\]\\w\\[\\033[00m\\]\\$ '
else
  PS1='\\\${debian_chroot:+(\$debian_chroot)}\\u@\\h:\\w\\$ '
fi
`

const bashrcWithGitBranch = `
# Function to extract current Git branch
parse_git_branch() {
  git branch 2>/dev/null | sed -e '/^[^*]/d' -e 's/* \\(.*\\)/(\\1)/'
}

if [ "$color_prompt" = yes ]; then
  PS1='\\\${debian_chroot:+(\$debian_chroot)}\\[\\033[01;32m\\]\\u@\\h\\[\\033[00m\\]:\\[\\033[01;34m\\]\\w\\[\\033[01;31m\\]$(parse_git_branch)\\[\\033[00m\\]\\$ '
else
  PS1='\\\${debian_chroot:+(\$debian_chroot)}\\u@\\h:\\w$(parse_git_branch)\\$ '
fi
`

const Page = () => {
  return (
    <MainContainer>
      <div>
        <h2>Show Git Branch Name on Linux Shell</h2>

        <p>
          To display the current Git branch name in your Linux shell prompt, you can modify your shell configuration file (typically <code>.bashrc</code>) to dynamically include the Git branch when you're inside a Git repository.
        </p>

        <p>First, locate the default prompt definition in your <CodeBlock code='~/.bashrc' />:</p>
        <CodeBlock code={bashrcDefault}/>

        <p>Now replace it with the following code to include the Git branch in red if you're inside a Git repo:</p>
        <CodeBlock code={bashrcWithGitBranch}/>

        <p>Finally, apply the changes by running:</p>
        <CodeBlock code={`source ~/.bashrc`}/>

        <p>
          Your Bash prompt will now display the current Git branch name in red whenever you are inside a Git-tracked directory. It's a simple but effective enhancement for development.
        </p>
      </div>
    </MainContainer>
  )
}

export default Page

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'show-git-branch-in-shell',
    title: 'Show Git Branch in Shell',
    excerpt: 'Enhance your terminal prompt by displaying the current Git branch.',
    date: '2025-07-29',
  },
  {
    slug: 'setup-shadowsocks-libev-ubuntu-proxy-server',
    title: 'Set Up a Shadowsocks-libev Proxy Server on Ubuntu',
    excerpt: 'Learn how to install and configure a secure, high-performance proxy server using Shadowsocks-libev on a Debian-based (Ubuntu) VPS.',
    date: '2025-08-01',
  },
  {
    slug: 'setup-shadowsocks-client-android-linux-windows',
    title: 'Connect to Your Shadowsocks Proxy from Android, Linux, and Windows',
    excerpt: 'Step-by-step guide to installing Shadowsocks clients and connecting to your proxy server from mobile, desktop, and terminal environments.',
    date: '2025-08-01',
  },
  // {
  //   slug: "setup-ssh-key-authentication",
  //   title: "How to Generate SSH Key Pairs and Use Them for Secure Authentication",
  //   excerpt: "Learn how to create SSH keys, copy them to your server, and disable password-based login for better security.",
  //   date: "2025-08-01"
  // }
];
import MainContainer from '@/components/layout/MainContainer';
import BlogRenderer from '@/components/blogs/BlogRenderer';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return [
    { slug: 'show-git-branch-in-shell' },
    { slug: 'setup-shadowsocks-libev-ubuntu-proxy-server' },
    { slug: 'setup-shadowsocks-client-android-linux-windows' },
  ];
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  return (
    <MainContainer>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '50rem' }}>
          <BlogRenderer slug={slug} />
        </div>
      </div>
    </MainContainer>
  );
};
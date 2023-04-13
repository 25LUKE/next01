export default async function getUserPosts(userId: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, { next: { revalidate: 60 } }) //ISR={incremental Static Regeneration}

    if (!res.ok) undefined

    return res.json()
}
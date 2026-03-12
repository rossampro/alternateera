import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const apiKey = config.youtubeApiKey
    const channelId = config.youtubeChannelId

    if (!apiKey || !channelId) {
        return { error: 'YouTube API configuration missing' }
    }

    try {
        // Fetch the 3 most recent videos from the channel
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=3`
        )

        // Cache the response for 1 hour to heavily reduce API usage
        setHeader(event, 'Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')

        if (!response.ok) {
            throw new Error(`YouTube API error: ${response.status}`)
        }

        const data = await response.json()
        
        // Filter out non-video items (like playlists or channels) and map to a clean format
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const videos = data.items
            ?.filter((item: any) => item.id.kind === 'youtube#video')
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((item: any) => ({
                id: item.id.videoId,
                title: item.snippet.title,
                description: item.snippet.description,
                publishedAt: item.snippet.publishedAt,
                thumbnails: item.snippet.thumbnails,
            })) || []

        return { videos }
    } catch (error) {
        console.error('Error fetching YouTube videos:', error)
        return { error: 'Failed to fetch videos' }
    }
})

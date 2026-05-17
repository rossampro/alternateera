import { defineEventHandler, setHeader } from 'h3'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const apiKey = config.youtubeApiKey
    const channelId = config.youtubeChannelId

    if (!apiKey || !channelId) {
        return { error: 'YouTube API configuration missing' }
    }

    try {
        // Every YouTube channel has an auto-generated Shorts playlist. 
        // You can get its ID by replacing the 'UC' in the channel ID with 'UUSH'
        const shortsPlaylistId = channelId.replace('UC', 'UUSH')

        // Fetch the 2 most recent shorts directly from the Shorts playlist
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${shortsPlaylistId}&part=snippet&maxResults=2`
        )

        // Cache the response for 1 hour to heavily reduce API usage
        setHeader(event, 'Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')

        if (!response.ok) {
            throw new Error(`YouTube API error: ${response.status}`)
        }

        const data = await response.json()
        
        // Map to a clean format
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const videos = data.items?.map((item: any) => ({
            id: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            publishedAt: item.snippet.publishedAt,
            thumbnails: item.snippet.thumbnails,
        })) || []

        return { videos }
    } catch (error) {
        console.error('Error fetching YouTube shorts:', error)
        return { error: 'Failed to fetch shorts' }
    }
})

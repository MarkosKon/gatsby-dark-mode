import React, { useContext, createContext } from "react"

import { useLocalStorage } from "../hooks/useLocalStorage"

const PostContext = createContext()

/**
 * To see the effect:
 * - gatsby build && gatsby serve then visit the page.
 * - comment out a post
 * - gatsby build && gatsby serve then visit the page again.
 */
const initialPosts = [
  {
    id: 1,
    text: "Post 1",
  },
  {
    id: 2,
    text: "This is the second post!",
  },
  {
    id: 3,
    text: "Post 3333",
  },
]

const PostProvider = ({ children }) => {
  const [savedPosts, setSavedPosts] = useLocalStorage("posts", initialPosts)
  return (
    <PostContext.Provider value={{ savedPosts, setSavedPosts }}>
      {children}
    </PostContext.Provider>
  )
}

function usePosts() {
  const context = useContext(PostContext)
  if (!context) throw new Error("usePosts must be used within a PostProvider")
  const { savedPosts, setSavedPosts } = context
  return {
    savedPosts,
    setSavedPosts,
  }
}

export { PostProvider, usePosts }

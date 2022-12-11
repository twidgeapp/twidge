import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import final_routes from './routes';
import { client, queryClient, rspc } from "./rspc.query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const router = createBrowserRouter(final_routes);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <rspc.Provider client={client} queryClient={queryClient}>
      <>
        <div className='dark'>
          <RouterProvider router={router} />
        </div>
        <ReactQueryDevtools />
      </>
    </rspc.Provider>
  </React.StrictMode>,
)

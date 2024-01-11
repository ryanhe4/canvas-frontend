'use client'
import dynamic from 'next/dynamic'

const CanvasComp = dynamic(() => import('../../components/Canvas'), {
  ssr: false,
})

export default function Canvas() {

  return (
    <main className={'flex flex-col'}>
      <div className={'w-full bg-amber-200'}>Toolbar
        <button className={'m-4 bg-amber-600 rounded text-white'}>Draw</button>
        <button>UnDo</button>
      </div>
      <div className={'w-full flex relative'}>
        <CanvasComp />
        <div className={'w-1/6 h-full bg-amber-50 fixed right-0'}>sidebar</div>
      </div>
    </main>
  )
}

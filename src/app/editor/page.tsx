'use client'
import dynamic from 'next/dynamic'

const CanvasView = dynamic(() => import('@/components/CanvasView'), {
  ssr: false,
})

export default function Editor() {

  return (
    <main className={'flex flex-col'}>
      <div className={'w-full bg-amber-200'}>Toolbar
        <button
          onClick={() => {}}
          className={`bg-amber-600 rounded text-white' : ''}`}>
          <p className={''}>Select</p>
        </button>
        <button
          onClick={() => {}/*handleChangeMode(mode === 'CREATE' ? 'EMPTY' : 'CREATE')*/}
          className={`bg-amber-600 rounded text-white `}>
          <p className={''}>Create</p>
        </button>
        <button>UnDo</button>
      </div>
      <div className={''}>
        <CanvasView />
      </div>
    </main>
  )
}

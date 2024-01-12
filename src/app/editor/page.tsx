'use client'
import useCanvasViewModel from '@/app/domain/useCanvasViewModel'
import dynamic from 'next/dynamic'

// const CanvasView = dynamic(() => import('@/app/components/CanvasView'), {
//   ssr: false,
// })
export default function Editor() {
  // const { mode, handleChangeMode } = useCanvasViewModel()

  return (
    <main className={'flex flex-col'}>
      {/*<div className={'w-full bg-amber-200'}>Toolbar*/}
      {/*  <button*/}
      {/*    onClick={() => handleChangeMode(mode === 'SELECT' ? 'EMPTY' : 'SELECT')}*/}
      {/*    className={`bg-amber-600 rounded text-white' : ''}`}>*/}
      {/*    <p className={mode === 'SELECT' ? 'text-red-400' : ''}>Select</p>*/}
      {/*  </button>*/}
      {/*  <button*/}
      {/*    onClick={() => handleChangeMode(mode === 'CREATE' ? 'EMPTY' : 'CREATE')}*/}
      {/*    className={`bg-amber-600 rounded text-white ${mode === 'CREATE' ? 'text-red-500' : ''}`}>*/}
      {/*    <p className={mode === 'CREATE' ? 'text-red-400' : ''}>Create</p>*/}
      {/*  </button>*/}
      {/*  <button>UnDo</button>*/}
      {/*</div>*/}
      {/*<div className={''}>*/}
        {/*<CanvasView />*/}
      {/*</div>*/}
    </main>
  )
}

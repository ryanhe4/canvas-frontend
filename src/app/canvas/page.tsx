'use client'
import dynamic from 'next/dynamic'
import useCanvasViewModel from '@/app/domain/useCanvasViewModel'

const CanvasComp = dynamic(() => import('@/app/components/Canvas'), {
  ssr: false,
})

export default function Canvas() {
  const { mode, handleChangeMode } = useCanvasViewModel()

  return (
    <main className={'flex flex-col'}>
      <div className={'w-full bg-amber-200'}>Toolbar
        <button
          onClick={() => handleChangeMode(mode === 'SELECT' ? 'EMPTY' : 'SELECT')}
          className={`m-4 bg-amber-600 rounded text-white' : ''}`}>
          <p className={mode === 'SELECT' ? 'text-red-400' : ''}>Select</p>
        </button>
        <button
          onClick={() => handleChangeMode(mode === 'CREATE' ? 'EMPTY' : 'CREATE')}
          className={`m-4 bg-amber-600 rounded text-white ${mode === 'CREATE' ? 'text-red-500' : ''}`}>
          <p className={mode === 'CREATE' ? 'text-red-400' : ''}>Create</p>
        </button>
        <button>UnDo</button>
      </div>
      <div className={''}>
        <CanvasComp />
      </div>
    </main>
  )
}

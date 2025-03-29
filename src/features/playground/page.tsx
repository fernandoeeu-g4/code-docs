import { Playground } from '../components/playground'
import { buttonExampleFiles } from '../components/playground.data'

export function PlaygroundPage() {
  return (
    <div className=" mx-auto p-4 bg-background h-svh flex flex-col">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Button Component Playground
      </h2>
      <Playground
        files={buttonExampleFiles}
        className="flex-grow min-h-0 h-full"
      />
    </div>
  )
}

import { IndianRupee, Clock, Hourglass } from 'lucide-react'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Checkbox } from './ui/checkbox'

const Sidebar = () => {
  const sortBy = [
    { 
      icon: <IndianRupee size={16} />,
      title: "Earliest Departure", 
    },
    {
      icon: <Clock size={16} />,
      title: "Price"
    },
    {
      icon: <Hourglass size={16} />,
      title: "Shortest ride"
    },
  ]
  const departureTime= [
    {
      name: "departure_before_six_am",
      title: "Before 6:00"
    },
    {
      name: "departure_six_to_noon",
      title: "6:00 - 12:00"
    },
    {
      name: "departure_noon_to_six",
      title: "12:00 - 18:00"
    },
  ]
  
  return (
    <aside className="hidden relative lg:block">
      <div className="sticky top-16 space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Sort by</h2>
          <RadioGroup defaultValue="option-one">
            {sortBy.map(s => 
              <Label key={s.title} htmlFor={s.title} className="flex gap-2 items-center justify-between rounded-md bg-popover p-4 hover:bg-accent hover:text-accent-foreground">
                {s.icon}
                {s.title}
                <RadioGroupItem value={s.title} className="ml-auto" id={s.title} />
              </Label>
            )}
          </RadioGroup>
        </div>

        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Departure time</h2>
          {departureTime.map(d => 
            <Label key={d.title} htmlFor={d.name} aria-label={d.name} className="flex gap-2 items-center justify-between rounded-md bg-popover p-4 hover:bg-accent hover:text-accent-foreground">
              {d.title}
              <Checkbox name={d.name} id={d.name} />
            </Label>
          )}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
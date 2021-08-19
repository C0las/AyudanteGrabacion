import { createSelector } from 'reselect'

export const hourWork = createSelector(
  (state) => state.allScheduler.scheduler,
  (scheduler) => {
    let data = scheduler.map((e) => {
      let startDateHour = new Date(e.startDate).getHours()
      let startDateMinute = new Date(e.startDate).getMinutes()

      let endDateHour = new Date(e.endDate).getHours()
      let endDateMinute = new Date(e.endDate).getMinutes()

      let hourRest = startDateHour - endDateHour
      let minuteRest = startDateMinute - endDateMinute

      return `${Math.abs(hourRest)}:${Math.abs(minuteRest)}`
    })

    return data
  }
)

export const hourWork1 = createSelector(
  (state) => state.allScheduler.scheduler,
  (scheduler) => {
    let data = scheduler.map((e) => {
      let startDateHour = new Date(e.startDate).getHours()
      let startDateMinute = new Date(e.startDate).getMinutes()

      let endDateHour = new Date(e.endDate).getHours()
      let endDateMinute = new Date(e.endDate).getMinutes()

      let totalRestHour = Math.abs(startDateHour - endDateHour)
      let totalRestMinute = Math.abs(startDateMinute - endDateMinute)

      /*let totalHour = totalRestHour++
      let totalMinute = totalRestMinute++

      if (totalMinute >= 60) {
        // Divide minutes by 60 and add result to hours
        totalHour += Math.floor(totalMinute / 60)
        // Add remainder of totalM / 60 to minutes
        totalMinute = totalMinute % 60
      }*/

      const horas = {
        hour: totalRestHour,
        minute: totalRestMinute
      }
      return horas
    })

    return data
  }
)

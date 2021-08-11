import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSchedulers } from "../../../redux/actions/schedulerActions";
import { format } from "date-fns";
import { filterAssistantSchedulerSelector } from "../../../redux/selectors/filter";

export default function Select() {
  const data = useSelector(filterAssistantSchedulerSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSchedulers);
  }, [dispatch]);

  return data.map((e) => {
    const startDate = format(new Date(e.startDate), "HH:mm");
    const endDate = format(new Date(e.endDate), "HH:mm");

    return (
      <option key={e._id} value={e._id}>
        {e.title} {startDate} - {endDate}
      </option>
    );
  });
}

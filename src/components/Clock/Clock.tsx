import React, { useState, useEffect } from 'react';

export type ClockProps = {
  clean: boolean;
}

class Subscriber {
  private readonly intervalId: number;
  private readonly onChange: (date: Date) => void;

  constructor(id: number, onChange: (date: Date) => void) {
    this.intervalId = id;
    this.onChange = onChange;
  }

  public subscribe(): number {
    const intervalId = setInterval(() => {
      console.log(`From subscriber: ${this.intervalId}`);
      this.onChange(new Date());
    }, 1000);
    return intervalId as unknown as number;
  }
}

const intervals: number[] = [];


export function Clock({clean}: ClockProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const subscriber = new Subscriber(intervals.length, setTime);
    const id = subscriber.subscribe();
    intervals.push(id);

    if (!clean) {
      return;
    }

    return () => {
      for (let x = 0; x < intervals.length; x++) {
        const id = intervals.pop();
        clearInterval(id);
      }
    };
  }, [clean, setTime]);

  return (
    <div>
      <h1>Current Time: {time.toLocaleTimeString()}</h1>
    </div>
  );
}

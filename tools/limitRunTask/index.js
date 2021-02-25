function limitRunTask(tasks, n) {
    return new Promise((resolve, reject) => {
      let index = 0, finish = 0, start = 0, res = [];
      function run() {
        if (finish == tasks.length) {
          resolve(res);
          return;
        }
        while (start < n && index < tasks.length) {
          // 每一阶段的任务数量++
          start++;
          let cur = index;
          tasks[index++]().then(v => {
            start--;
            finish++;
            res[cur] = v;
            run();
          });
        }
      }
      run();
    })
  }
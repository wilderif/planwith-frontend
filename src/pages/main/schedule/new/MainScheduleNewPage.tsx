import { useEffect } from "react";
import { useTodoScheduleForm } from "@/hooks/useTodoScheduleForm";
import ScheduleForm from "@/components/form/TodoScheduleForm/TodoScheduleForm";

function MainScheduleNewPage() {
  const form = useTodoScheduleForm({
    withEndDate: true,
    withEndTime: true,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.validateContentAndCategory()) return;
    console.log(
      form.content,
      form.category,
      form.startDate,
      form.endDate,
      form.startTime,
      form.endTime,
      form.isAlarmOn
    );
    // 스케줄 생성 api
  };

  useEffect(() => {
    // 카테고리 목록 가져오는 api
    form.setCategoryList([
      { name: "카테고리1", color: "blue" },
      { name: "카테고리2", color: "red" },
      { name: "카테고리3", color: "black" },
    ]);
  }, []);

  return (
    <ScheduleForm
      form={form}
      onSubmit={handleSubmit}
      withEndDate={true}
      withEndTime={true}
      withAlarm={true}
      submitButtonText="생성"
    />
  );
}

export default MainScheduleNewPage;

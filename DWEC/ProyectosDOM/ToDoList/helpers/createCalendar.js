import * as ics from "ics";
export function createCalendar(tasks) {
  // Obtiene la fecha actual
  const now = new Date();
  const start = [
    now.getFullYear(),
    now.getMonth() + 1,
    now.getDate(),
    now.getHours(),
    now.getMinutes(),
  ];

  // Calcula la fecha 30 días después
  const end = new Date();
  end.setDate(now.getDate() + 30);
  const endArray = [
    end.getFullYear(),
    end.getMonth() + 1,
    end.getDate(),
    end.getHours(),
    end.getMinutes(),
  ];

  // Cuenta las tareas pendientes
  const pendingTasks = tasks.filter((task) => !task.isCompleted).length;

  const event = {
    start: start,
    end: endArray,
    title: "Tareas pendientes",
    description: `Tienes ${pendingTasks} tareas pendientes.`,
    organizer: { name: "Roger", email: "roger@example.com" },
    attendees: [{ name: "Roger", email: "roger@example.com" }],
    status: "CONFIRMED",
    busyStatus: "BUSY",
    categories: ["Tareas"],
  };

  // Crea el evento y maneja el error si existee
  ics.createEvent(event, (error, value) => {
    // Crea un Blob con el contenido del evento
    const blob = new Blob([value], { type: "text/calendar" });

    // Crea una URL para el blob de arriba
    const url = URL.createObjectURL(blob);

    // Crea un enlace de descarga
    const link = document.createElement("a");
    link.href = url;
    link.download = `tareas_pendientes.ics`;

    // Agrega el enlace al DOM y haz clic en él
    document.body.appendChild(link);
    link.click();

    // Limpia después de la descarga
    document.body.removeChild(link);
  });
}
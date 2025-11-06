import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar as CalendarIcon, Clock, User, Video, MapPin } from "lucide-react";
import { appointments } from "@/data/appointments";
import { professionals } from "@/data/professionals";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);

  const getAppointmentsForDate = (date: string) => {
    return appointments.filter(apt => apt.date === date);
  };

  const getProfessionalName = (id: number) => {
    return professionals.find(p => p.id === id)?.name || "Professionnel";
  };

  const statusColors = {
    "confirmé": "bg-accent/10 text-accent border-accent/20",
    "à venir": "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400",
    "annulé": "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400",
    "terminé": "bg-muted text-muted-foreground border-border"
  };

  const todayAppointments = getAppointmentsForDate(selectedDate);

  // Generate calendar days (simple month view)
  const generateCalendarDays = () => {
    const date = new Date(selectedDate);
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    for (let i = 1; i <= lastDay.getDate(); i++) {
      const currentDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const hasAppointment = appointments.some(apt => apt.date === currentDate);
      days.push({ date: currentDate, day: i, hasAppointment });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  return (
    <div className="min-h-screen gradient-subtle">
      <Navbar />
      
      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mon Calendrier
            </span>
          </h1>
          <p className="text-muted-foreground">
            Gérez vos rendez-vous et séances
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Calendar View */}
          <Card className="lg:col-span-2 p-6 border-none shadow-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">
                {new Date(selectedDate).toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}
              </h2>
              <Button className="gradient-hero shadow-soft">
                Nouveau rendez-vous
              </Button>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-4">
              {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map(day => (
                <div key={day} className="text-center text-sm font-semibold text-muted-foreground py-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map(({ date, day, hasAppointment }, index) => (
                <motion.button
                  key={date}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.01 }}
                  onClick={() => setSelectedDate(date)}
                  className={`aspect-square rounded-xl flex items-center justify-center text-sm font-medium transition-smooth relative
                    ${selectedDate === date 
                      ? "gradient-hero text-white shadow-soft" 
                      : "hover:bg-secondary"
                    }
                    ${date === new Date().toISOString().split('T')[0]
                      ? "ring-2 ring-primary ring-offset-2"
                      : ""
                    }`}
                >
                  {day}
                  {hasAppointment && (
                    <div className="absolute bottom-1 w-1 h-1 rounded-full bg-accent" />
                  )}
                </motion.button>
              ))}
            </div>
          </Card>

          {/* Appointments List */}
          <div className="space-y-4">
            <Card className="p-6 border-none shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <CalendarIcon className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">
                  Rendez-vous du {new Date(selectedDate).toLocaleDateString("fr-FR", { day: "numeric", month: "long" })}
                </h3>
              </div>

              {todayAppointments.length > 0 ? (
                <div className="space-y-3">
                  {todayAppointments.map((apt, index) => (
                    <motion.div
                      key={apt.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-secondary rounded-xl hover:bg-muted/50 transition-smooth"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-semibold text-sm">{apt.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {getProfessionalName(apt.professionalId)}
                          </p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full border ${statusColors[apt.status]}`}>
                          {apt.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {apt.time}
                        </div>
                        <div className="flex items-center gap-1">
                          {apt.type === "en ligne" ? (
                            <Video className="w-3 h-3" />
                          ) : (
                            <MapPin className="w-3 h-3" />
                          )}
                          {apt.type}
                        </div>
                      </div>

                      {apt.notes && (
                        <p className="text-xs text-muted-foreground mt-2 italic">
                          {apt.notes}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <CalendarIcon className="w-12 h-12 mx-auto mb-2 opacity-30" />
                  <p className="text-sm">Aucun rendez-vous ce jour</p>
                </div>
              )}
            </Card>

            <Card className="p-6 border-none shadow-card gradient-card">
              <h3 className="font-semibold mb-4">Statistiques</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total séances</span>
                  <span className="font-semibold">{appointments.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Confirmées</span>
                  <span className="font-semibold text-accent">
                    {appointments.filter(a => a.status === "confirmé").length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Terminées</span>
                  <span className="font-semibold text-muted-foreground">
                    {appointments.filter(a => a.status === "terminé").length}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Calendar;

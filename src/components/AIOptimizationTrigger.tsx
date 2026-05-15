
'use client';

import React, { useState } from 'react';
import { optimizeDeliveryRoutes, type OptimizeDeliveryRoutesOutput } from '@/ai/flows/optimize-delivery-routes';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, Zap, Route, Fuel, Clock } from 'lucide-react';
import { Badge } from './ui/badge';

export const AIOptimizationTrigger = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<OptimizeDeliveryRoutesOutput | null>(null);

  const handleOptimize = async () => {
    setLoading(true);
    try {
      const output = await optimizeDeliveryRoutes({
        startingLocation: "Main Distribution Center, Madrid",
        deliveryLocations: [
          { address: "Corporate Hub Plaza, 22", recipient: "Global Tech Inc.", notes: "Elevator access only" },
          { address: "Green District Warehouse 4", recipient: "EcoLogistics", notes: "Call upon arrival" }
        ],
        orderDetails: [
          { orderId: "ORD-9921", description: "Critical Server Components", weightKg: 12 },
          { orderId: "ORD-9922", description: "Eco-packaging supplies", weightKg: 45 }
        ],
        vehicleCapacityKg: 500
      });
      setResult(output);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 mb-12 px-4 no-print">
      <Card className="bg-secondary/40 backdrop-blur-xl border-white/5 overflow-hidden">
        <CardHeader className="text-center">
          <div className="mx-auto p-2 bg-accent/20 rounded-full w-fit mb-2">
            <Zap className="w-5 h-5 text-accent" />
          </div>
          <CardTitle className="text-2xl font-headline font-bold text-white">AI Route Preview</CardTitle>
          <CardDescription className="text-slate-400">
            Prueba nuestro motor de optimización en tiempo real.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {!result ? (
            <div className="flex flex-col items-center gap-4 py-8">
              <p className="text-sm text-slate-400 text-center px-8">
                Genera una simulación de ruta basada en las ubicaciones demo de Madrid.
              </p>
              <Button 
                onClick={handleOptimize} 
                disabled={loading}
                className="bg-accent text-primary font-bold hover:bg-accent/90"
              >
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Zap className="mr-2 h-4 w-4" />}
                SIMULAR OPTIMIZACIÓN
              </Button>
            </div>
          ) : (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-primary/50 p-3 rounded-lg border border-white/5 flex flex-col items-center">
                  <Clock className="w-4 h-4 text-accent mb-1" />
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Tiempo</span>
                  <span className="text-sm font-bold">{result.estimatedTravelTimeMinutes}m</span>
                </div>
                <div className="bg-primary/50 p-3 rounded-lg border border-white/5 flex flex-col items-center">
                  <Fuel className="w-4 h-4 text-accent mb-1" />
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Ahorro</span>
                  <span className="text-sm font-bold">{result.estimatedFuelConsumptionLiters}L</span>
                </div>
                <div className="bg-primary/50 p-3 rounded-lg border border-white/5 flex flex-col items-center">
                  <Route className="w-4 h-4 text-accent mb-1" />
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Paradas</span>
                  <span className="text-sm font-bold">{result.optimalRoutePlan.length}</span>
                </div>
              </div>
              
              <div className="bg-primary/30 p-4 rounded-xl space-y-3">
                <h4 className="text-xs font-headline font-bold text-accent uppercase flex items-center gap-2">
                  <Route className="w-3 h-3" /> Hoja de Ruta AI
                </h4>
                {result.optimalRoutePlan.map((stop) => (
                  <div key={stop.stopNumber} className="flex gap-3 text-sm border-l-2 border-accent/30 pl-3">
                    <span className="text-accent font-bold">#{stop.stopNumber}</span>
                    <div>
                      <p className="text-white font-medium">{stop.address}</p>
                      <p className="text-[11px] text-slate-400 italic">{stop.instructions}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-accent/10 border border-accent/20 rounded-lg">
                <p className="text-[11px] leading-relaxed text-slate-300">
                  <strong className="text-accent">Razonamiento AI:</strong> {result.reasoning}
                </p>
              </div>

              <Button 
                variant="ghost" 
                onClick={() => setResult(null)} 
                className="w-full text-xs text-slate-500 hover:text-white"
              >
                REINICIAR SIMULACIÓN
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

'use server';
/**
 * @fileOverview An AI agent for optimizing B2B delivery routes.
 *
 * - optimizeDeliveryRoutes - A function that handles the route optimization process.
 * - OptimizeDeliveryRoutesInput - The input type for the optimizeDeliveryRoutes function.
 * - OptimizeDeliveryRoutesOutput - The return type for the optimizeDeliveryRoutes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeDeliveryRoutesInputSchema = z.object({
  deliveryLocations: z.array(
    z.object({
      address: z.string().describe('The full address of the delivery location.'),
      recipient: z.string().optional().describe('Optional recipient name at this location.'),
      notes: z.string().optional().describe('Any specific delivery notes for this location.'),
    })
  ).describe('A list of B2B delivery locations.'),
  orderDetails: z.array(
    z.object({
      orderId: z.string().describe('Unique identifier for the order.'),
      description: z.string().describe('Description of items in the order.'),
      weightKg: z.number().optional().describe('Optional weight of the order in kilograms.'),
      volumeM3: z.number().optional().describe('Optional volume of the order in cubic meters.'),
    })
  ).describe('A list of order specifics for each delivery.'),
  startingLocation: z.string().describe('The starting address for the delivery route.'),
  endingLocation: z.string().optional().describe('The optional ending address for the delivery route (e.g., back to the depot).'),
  vehicleCapacityKg: z.number().optional().describe('Maximum weight capacity of the delivery vehicle in kilograms.'),
  vehicleCapacityM3: z.number().optional().describe('Maximum volume capacity of the delivery vehicle in cubic meters.'),
});
export type OptimizeDeliveryRoutesInput = z.infer<typeof OptimizeDeliveryRoutesInputSchema>;

const OptimizeDeliveryRoutesOutputSchema = z.object({
  optimalRoutePlan: z.array(
    z.object({
      stopNumber: z.number().describe('The sequential number of the stop in the optimized route.'),
      address: z.string().describe('The address of this stop.'),
      recipient: z.string().optional().describe('Optional recipient name for this stop.'),
      instructions: z.string().describe('Specific instructions for this stop (e.g., drop-off details, special handling).'),
    })
  ).describe('An ordered list of stops for the optimal delivery route.'),
  estimatedTravelTimeMinutes: z.number().describe('Estimated total travel time for the entire route in minutes.'),
  estimatedFuelConsumptionLiters: z.number().describe('Estimated total fuel consumption for the entire route in liters.'),
  reasoning: z.string().describe('Explanation of the optimization choices made, including how travel time and fuel consumption were minimized.'),
});
export type OptimizeDeliveryRoutesOutput = z.infer<typeof OptimizeDeliveryRoutesOutputSchema>;

export async function optimizeDeliveryRoutes(input: OptimizeDeliveryRoutesInput): Promise<OptimizeDeliveryRoutesOutput> {
  return optimizeDeliveryRoutesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeDeliveryRoutesPrompt',
  input: {schema: OptimizeDeliveryRoutesInputSchema},
  output: {schema: OptimizeDeliveryRoutesOutputSchema},
  prompt: `You are an expert logistics planner specializing in B2B delivery route optimization. Your goal is to create the most efficient delivery route plan given a starting location, a list of delivery locations, and order specifics. The primary objectives are to minimize total travel time and fuel consumption. Consider any vehicle capacity limits if provided. The output must be valid JSON.

Input:
Starting Location: {{{startingLocation}}}
{{#if endingLocation}}Ending Location: {{{endingLocation}}}{{/if}}
{{#if vehicleCapacityKg}}Vehicle Weight Capacity (kg): {{{vehicleCapacityKg}}}{{/if}}
{{#if vehicleCapacityM3}}Vehicle Volume Capacity (m^3): {{{vehicleCapacityM3}}}{{/if}}

Delivery Locations:
{{#each deliveryLocations}}
- Address: {{{address}}} {{#if recipient}}(Recipient: {{{recipient}}}){{/if}} {{#if notes}}(Notes: {{{notes}}}){{/if}}
{{/each}}

Order Details:
{{#each orderDetails}}
- Order ID: {{{orderId}}} Description: {{{description}}} {{#if weightKg}}Weight: {{{weightKg}}}kg{{/if}} {{#if volumeM3}}Volume: {{{volumeM3}}}m^3{{/if}}
{{/each}}

Task:
Generate an optimal route plan as an ordered list of stops, including instructions for each stop. Also, provide estimates for total travel time and fuel consumption, and explain your reasoning for the optimized route. The route should start at the startingLocation and end at the endingLocation if provided, otherwise the final delivery location.

Ensure the output conforms strictly to the OptimizeDeliveryRoutesOutputSchema.`,
});

const optimizeDeliveryRoutesFlow = ai.defineFlow(
  {
    name: 'optimizeDeliveryRoutesFlow',
    inputSchema: OptimizeDeliveryRoutesInputSchema,
    outputSchema: OptimizeDeliveryRoutesOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
